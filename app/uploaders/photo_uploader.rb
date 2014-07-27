# encoding: utf-8

class PhotoUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  process :resize_to_fill => [175, 210]

  version :thumb do
    process :resize_to_fill => [100, 120]
  end

  def extension_white_list
    %w(jpg jpeg gif png)
  end

  def default_url
      ActionController::Base.helpers.asset_path("fallback/" + [version_name, "placeholder.jpg"].compact.join('_'))
  end
end
