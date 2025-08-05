# Gemfile
source "https://rubygems.org"

# GitHub Pages gem (includes Jekyll and plugins)
gem "github-pages", group: :jekyll_plugins

# Additional plugins (already included in github-pages)
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# Windows and JRuby specific
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# kramdown v2 ships without the gfm parser by default
gem "kramdown-parser-gfm"