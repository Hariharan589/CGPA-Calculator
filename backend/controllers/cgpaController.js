// History/save functionality has been intentionally disabled.
// These handlers now return 410 Gone to indicate the feature is removed.

exports.saveCgpa = async (req, res) => {
  res.status(410).json({ error: 'Saving history is disabled.' });
};

exports.getHistory = async (req, res) => {
  res.status(410).json({ error: 'History is disabled.' });
};
