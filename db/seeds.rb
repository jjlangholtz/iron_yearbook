Student.create(
  name: 'Joshua Langholtz',
  photo: File.open(File.join(Rails.root, 'app/assets/images/seed/jjlangholtz.jpeg')),
  group: 'ror',
  description: 'Came from a military family and moved around 
  quite a bit when he was young. He was born 
  in Japan and is a first generation college 
  graduate with a degree in biological science. 
  He remembers being the smallest guy in 
  class and didn’t make it past the first cut 
  during try-outs. As a freshman in high school 
  he discovered the sport of wrestling and 
  immediately found success. He finished his 
  senior year as the state runner-up for his 
  weight class and went on to wrestle in college. 
  He’s a hardcore gamer and spent 6 months of training in an attempt to be 
  a salaried League of Legends player. He didn\'t make it, but he did 
  manage to reach the top 1% on the NA server of about 1,000,000 
  registered players. Picture is of Josh and a Cosplay Girl at a MLG event in 
  Raleigh.',
  twitter: '@JJLangholtz',
  linkedin: 'www.linkedin.com/in/jjlangholtz',
  github: 'www.github.com/jjlangholtz',
  website: 'www.joshualangholtz.com')

Student.create(
  name: 'Kent Lovelace',
  photo: File.open(File.join(Rails.root, 'app/assets/images/seed/klovelacek.jpeg')),
  group: 'fee',
  description: 'Kent proudly owns 
  the title of “oldest guy in the group”. He 
  was the first African-American to be 
  hired in the Creative Department of The 
  Martin Agency, the ad agency that 
  brings us the “GIECO gecko”, Wal-Mart 
  ads, Chips Ahoy Cookie ads and lots of 
  other stuff we probably click past 
  everyday. He also had a long time 
  career as a designer at Saatchi & Saatchi 
  in Los Angles where he worked on the 
  Toyota Motor Campaign. Kent shared a photo of the creative team at The 
  Martin Agency, circa 1986.',
  twitter: '',
  linkedin: '',
  github: 'klovelacek',
  website: '')

20.times do
  username = Faker::Internet.user_name
  Student.create(
    name: Faker::Name.name,
    photo: File.open(File.join(Rails.root, 'app/assets/images/fallback/placeholder.png')),
    group: ['ror', 'fee'].sample,
    description: Faker::Lorem.paragraph,
    twitter: "@#{username}",
    linkedin: Faker::Internet.url('linkedin.com', "/#{username}"),
    github: Faker::Internet.url('github.com', "/#{username}"),
    website: Faker::Internet.domain_name)
end
