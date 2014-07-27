class AddGroupToStudents < ActiveRecord::Migration
  def change
    add_column :students, :group, :string
  end
end
