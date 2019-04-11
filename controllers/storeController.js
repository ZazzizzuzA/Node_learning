exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index')
};

exports.addStore = (req, res, next) => {
  res.render('editStore', { title: 'Add Store' })
};

exports.createStore = (req, res, next) => {
  res.json(req.body)
}