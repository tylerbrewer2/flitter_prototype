module MockConcern
  extend ActiveSupport::Concern

  def formatted_mock_users
    mock_users.map { |user| user.to_json }
  end

  private

  def mock_users
    [{
      name: 'Arbelladon Yllafiel',
      date: random_day,
      time: random_time,
      status: 'A comparative pin meets the play sea. Why does a liquid choir nose on top of a negative?
              How does a concentrated electronics escape the pure harmony?'
    }, {
      name: 'Elandorr Aranala',
      date: random_day,
      time: random_time,
      status: 'The breed laughs within the symphony! The overlooked coke speculates without a governor.
              The music slices the dated viewer. The worth leaps an awful library below the extract.'
    }, {
      name: 'Ailre Glynneiros',
      date: random_day,
      time: random_time,
      status: 'An anonymous excess pauses. The borderline gasps! A room lusts on top of a blanket.
              The intellect swings next to the scotch.'
    }]
  end

  def random_day
    random_date.strftime('%m/%d/%Y')
  end

  def random_time
    random_date.strftime('%I:%M %P')
  end

  def random_date
    rand(10.years).seconds.ago
  end
end
