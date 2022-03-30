const asyncHandler = require('express-async-handler')

// @description  Get goals
// @route  GET /api/goals
// @access Private
const getGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'get goals'})
})

// @description  Set goals
// @route  POST /api/goals
// @access Private
const setGoal = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'set goal'})
})

// @description  update goal
// @route  PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `update goal ${req.params.id}`})
})

// @description  Delete goal
// @route  DELETE /api/goal/:id
// @access Private
const deleteGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `delete goal ${req.params.id}`})
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}