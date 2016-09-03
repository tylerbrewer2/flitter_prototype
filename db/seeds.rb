# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.create({
  name: 'Arbelladon Yllafiel',
  date: rand(10.years).seconds.ago.strftime('%m/%d/%Y'),
  time: rand(10.years).seconds.ago.strftime('%I:%M %P'),
  status: 'A comparative pin meets the play sea. Why does a liquid choir nose on top of a negative?
          How does a concentrated electronics escape the pure harmony?'
  })

Post.create({
  name: 'Elandorr Aranala',
  date: rand(10.years).seconds.ago.strftime('%m/%d/%Y'),
  time: rand(10.years).seconds.ago.strftime('%I:%M %P'),
  status: 'The breed laughs within the symphony! The overlooked coke speculates without a governor.
          The music slices the dated viewer. The worth leaps an awful library below the extract.'
  })

Post.create({
  name: 'Ailre Glynneiros',
  date: rand(10.years).seconds.ago.strftime('%m/%d/%Y'),
  time: rand(10.years).seconds.ago.strftime('%I:%M %P'),
  status: 'An anonymous excess pauses. The borderline gasps! A room lusts on top of a blanket.
          The intellect swings next to the scotch.'
  })
