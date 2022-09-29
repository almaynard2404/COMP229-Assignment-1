import { Router } from "express";
import { displayAbout, 
    displayContact, 
    displayHome, 
    displayProjects, 
    displayServices } from "../controllers/index.controller.server.js";

const router = Router();

router.get('/', displayHome);
router.get('/home', displayHome);
router.get('/about', displayAbout);
router.get('/projects', displayProjects);
router.get('/services', displayServices);
router.get('/contact', displayContact);

export default router;