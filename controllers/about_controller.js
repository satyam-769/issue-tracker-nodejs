const aboutController = function(req, res){
  return res.render('about_us', {
    title: 'Issue Tracker | About Us',
    about_us: '- Explore other options while we prepare this page.',
  });
}

export default aboutController;