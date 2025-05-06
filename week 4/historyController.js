// 📁 backend/controllers/historyController.js
exports.saveHistory = async (req, res) => {
  try {
    const { userId, fileName, chartType, xAxis, yAxis } = req.body;
    const newEntry = new History({ userId, fileName, chartType, xAxis, yAxis });
    await newEntry.save();
    res.status(200).json({ message: "History saved" });
  } catch (error) {
    res.status(500).json({ message: "Error saving history" });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const history = await History.find({ userId: req.user.id });
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: "Error fetching history" });
  }
};
