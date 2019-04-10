exports.myMiddleWare = (req, res, next) => {
  req.name = 'Mike';
  if (req.name === 'Mike') {
    throw Error('That is a stupid name');
  }
  next();
};

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index')
};
