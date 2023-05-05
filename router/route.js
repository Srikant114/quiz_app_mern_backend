import { Router } from "express";
const router = Router();


/** import controllers  */
import * as controller from '../controllers/controller.js'

/** Questions Routes api */

router.route('/questions')
        .get(controller.getQuestions) /** Get request */
        .post(controller.insertQuestions) /** Post request */
        .delete(controller.deleteQuestions) /** Delete Question */

router.route('/result')
        .get(controller.getResult)
        .post(controller.postResult)
        .delete(controller.deleteResult)


export default router;