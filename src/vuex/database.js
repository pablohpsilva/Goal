import PouchDB from 'pouchdb';

// import memory from 'pouchdb/extras/memory';

const pouchDBName = 'goaldatabase',
  // pouchDBDefaultOptions = { adapter: 'memory', auto_compaction: true },
  pouchDBDefaultOptions = {
    adapter: 'websql',
    auto_compaction: true,
  },
  adaptersFallback = [
    'idb',
    'websql',
    'leveldb',
    'http',
  ];

// export const camelize = (string) => string.replace(/_\w/g, (m) => m[1].toUpperCase());

export default {
  database: new PouchDB(pouchDBName, pouchDBDefaultOptions),

  persist() {
    const persistDBOptions = {
      adapter: 'websql',
      auto_compaction: true,
    };

    for (let index = 0, total = adaptersFallback.length; index < total; index += 1) {
      persistDBOptions.adapter = adaptersFallback[index];
      this.database = new PouchDB(pouchDBName, persistDBOptions);
      if (this.database) {
        break;
      }
    }

    if (!this.database) {
      this.database = new PouchDB(pouchDBName, { auto_compaction: true });
    }

    return this;
  },

  putDoc(key = null, data = null) {
    if (!key || !data) {
      throw Error('GoalDatabase: Neither key nor data can be null');
    }

    this.getDoc(key)
      /* eslint-disable */
      .then(doc => this.database.put({ _id: key, _rev: doc._rev, data }))
      /* eslint-enable */
      .catch(() =>
        this.database.put({ _id: key, data })
          .then(success => success)
          .catch((err) => {
            throw Error(`GoalDatabase: ${err}`);
          })
      );
    return this;
  },

  getDoc(key) {
    return this.database.get(key);
  },

  getAll() {
    return this.database.allDocs({
      include_docs: true,
      attachments: true,
    });
  },

  deleteDoc(key) {
    return this.database.remove(key);
  },

  destroyDatabase() {
    return this.database.destroy();
  },
};
