const TaskModel = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      timestamps: false, // Desativa os timestamps
    }
  );

  return Task;
};

module.exports = TaskModel;
