const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await User
    .find({})
    .populate('notes')
  return response.json(users.map(user => User.format(user)))
})

usersRouter.post('/', async (request, response) => {
  try {
    const body = request.body

    const existingUser = await User.find({ username: body.username })
    if (existingUser.length > 0) {
      return response.status(400).json({ error: 'username must be unique' })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
      username: body.username,
      passwordHash: passwordHash,
      notes: []
    })

    const savedUser = await user.save()

    return response.json(User.format(savedUser))
  } catch (exception) {
    return response.status(500).json({ error: 'something went wrong...' })
  }
})

module.exports = usersRouter