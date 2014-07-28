class AddPhotoRenameToStudents < ActiveRecord::Migration
  def change
    rename_column :students, :photo_uid, :photo
  end
end
