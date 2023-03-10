const { Skill, } = require('../models')

class SkillController {
    // [POST] /api/skills/create
    async create(req, res, next) {
        const data = req.body
        // data.floors = null
        console.log("body: ", req.body)

        const skill = new Skill(data)

        try {
            // console.log(skill)
            const result = await skill.save()
        } catch (error) {
            next(error)
        }

        return res.json({
            message: 'Created skill!',
        })
    }

    // [PATCH] /api/skills/update/:id
    async update(req, res, next) {}

    // [PATCH] /api/skills/update/:id/name
    async updateFloor(req, res, next) {}
}

module.exports = new SkillController
