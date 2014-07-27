25.times do
  username = Faker::Internet.user_name
  Student.create(
    name: Faker::Name.name,
    photo: File.open(File.join(Rails.root, 'app/assets/images/fallback/placeholder.png')),
    description: Faker::Lorem.paragraph,
    twitter: "@#{username}",
    linkedin: Faker::Internet.url('linkedin.com', "/#{username}"),
    github: Faker::Internet.url('github.com', "/#{username}"),
    website: Faker::Internet.domain_name)
end
