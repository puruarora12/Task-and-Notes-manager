const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/task.db'
})

const Tasks = db.define('task', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    description: {
        type: Sequelize.BOOLEAN
    },
    due_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 0                     // 0--> incomplete and 1--> completed
    },
    priority: {
        type: Sequelize.INTEGER             // 0-->low, 1--> medium and 2--> high
    },
})

const Notes = db.define('notes',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    note: {
        type: Sequelize.STRING,
    }
})

Tasks.hasMany(Notes, {foreignKey: 'id'})
Notes.belongsTo(Tasks)

module.exports = {
    db, Tasks, Notes
}