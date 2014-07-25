class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.string :twitter
      t.string :photo_uid
      t.text :description

      t.timestamps
    end
  end
end
