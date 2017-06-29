class Api::V1::SearchController < ApplicationController
  set :public_folder, "../../dist"

  get "/" do
    send_file File.join(settings.public_folder, "index.html")
  end

end
