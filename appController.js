const appDAO = require("../DAO/application");
module.exports.getApps = async (req, res, next) => {
  try {
    let criteria = req.params.criteria;
    const data = await appDAO.get(criteria);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
