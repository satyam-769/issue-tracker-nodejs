import Project from '../models/project.js';

const homeController = async function (req, res) {
  try {
    let projects = await Project.find({}).sort('-createdAt');
    return res.render('home', {
      title: 'Issue Tracker | Home',
      projects,
    });
  } catch (err) {
    console.log('Error', err);
    return res.status(500).send('Internal Server Error');
  }
};

export default homeController;