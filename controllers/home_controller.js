import Project from '../models/project.js';

const homeController = async function (req, res) {
  try {
    let projects = await Project.find({}).sort('-createdAt');
    return res.render('home', {
      title: 'Issue Tracker | Home',
      projects,
    });
  } catch {
    console.log('Error', err);
    return;
  }
};

export default homeController;