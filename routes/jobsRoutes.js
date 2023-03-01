import Express from 'express';
const router = Express.Router();

import { 
    createJob, 
    deleteJob, 
    getAllJobs, 
    updateJob, 
    showStats 
} from '../controllers/jobsController.js' ;


router.route('/').post(createJob);
router.route('/all').get(getAllJobs);
router.route('/stats').get(showStats);
router.route('/:id').delete(deleteJob);


export default router;