source "https://rubygems.org"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "rails", "~> 5.1.2"
gem "puma", "~> 3.7"
gem "sass-rails", "~> 5.0"
gem "uglifier", ">= 1.3.0"
gem "browserify-rails"
gem "autoprefixer-rails", "~> 6.4"
gem "jquery-rails", "~> 4.0"
gem "rake"
gem "rack-attack"

group :development, :test do
  gem "rspec-rails"
  gem "shoulda-matchers", "~> 3.1"
end

group :development do
  gem "better_errors"
  gem "binding_of_caller"
  gem "spring"
end

group :console, :development, :test do
  gem "awesome_print", "~> 1.7"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
