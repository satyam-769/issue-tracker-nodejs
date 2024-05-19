const contactController = function(req, res){
  return res.render('contact_us', {
    title: 'Issue Tracker | Contact Us',
    contact_us: '- Explore other options while we prepare this page.',
  });
}

export default contactController;