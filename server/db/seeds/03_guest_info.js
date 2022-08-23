/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('guest_info').insert([
    {property_id: 1, title: 'Mr.', last_name: 'Koshelev', first_name: 'Sergei', local_name_spelling: 'セルゲイ', date_of_birth: null, company: 'Code Chrysalis', position: 'Full Stack Engineer'},
    {property_id: 1, title: 'Ms.', last_name: 'Kugai', first_name: 'Tomomi', local_name_spelling: '久貝 ともみ', date_of_birth: '1984-08-10', company: 'Code Chrysalis', position: 'Full Stack Engineer'},
    {property_id: 1, title: 'Mr.', last_name: 'Kanetake', first_name: 'Hiroaki', local_name_spelling: '金武 宏明', date_of_birth: '1989-09-07', company: 'Code Chrysalis', position: 'Full Stack Engineer'},
    {property_id: 1, title: 'Mr.', last_name: 'Brown', first_name: 'Zach', local_name_spelling: 'ザック', date_of_birth: null, company: 'Code Chrysalis', position: 'Full Stack Engineer'},
    {property_id: 1, title: 'Mr.', last_name: 'Wales', first_name: 'Jon', local_name_spelling: 'ジョン', date_of_birth: null, company: 'Code Chrysalis', position: 'Full Stack Engineer'},
    {property_id: 1, title: 'Mr.', last_name: 'Hofmann', first_name: 'Tom', local_name_spelling: 'トム', date_of_birth: null, company: 'Code Chrysalis', position: 'Full Stack Engineer'},
    {property_id: 1, title: 'Mr.', last_name: 'Assis', first_name: 'Julio', local_name_spelling: 'ジュリオ', date_of_birth: null, company: 'Code Chrysalis', position: 'Full Stack Engineer'},
    {property_id: 1, title: 'Mr.', last_name: 'Takeda', first_name: 'Takashi', local_name_spelling: '竹田 たかし', date_of_birth: null, company: 'Code Chrysalis', position: 'Full Stack Engineer'},
    {property_id: 1, title: 'Ms.', last_name: 'Niigata', first_name: 'Kurumi', local_name_spelling: 'くるみ', date_of_birth: null, company: 'Code Chrysalis', position: 'Full Stack Engineer'},
    {property_id: 1, title: 'Mr.', last_name: 'Ly', first_name: 'Kim', local_name_spelling: 'キム', date_of_birth: null, company: 'Code Chrysalis', position: 'Full Stack Engineer'},
    {property_id: 1, title: 'Mr.', last_name: 'Uema', first_name: 'Daiki', local_name_spelling: 'だいき', date_of_birth: null, company: 'Code Chrysalis', position: 'Full Stack Engineer'},
    {property_id: 1, title: 'Mr.', last_name: 'Machado', first_name: 'Felipe', local_name_spelling: 'フェリーぺ', date_of_birth: null, company: 'Code Chrysalis', position: 'Full Stack Engineer'},
    {property_id: 1, title: 'Mrs.', last_name: 'Toyama', first_name: 'Marie', local_name_spelling: 'まりえ', date_of_birth: null, company: 'Code Chrysalis', position: 'Full Stack Engineer'},
    {property_id: 1, title: 'Mr.', last_name: 'Haley', first_name: 'Josh', local_name_spelling: 'ジョッシュ', date_of_birth: null, company: 'Code Chrysalis', position: 'Full Stack Engineer'},
    {property_id: 1, title: 'Mr.', last_name: 'Sacco', first_name: 'Joe', local_name_spelling: 'ジョー', date_of_birth: null, company: 'Code Chrysalis', position: 'Full Stack Engineer'},
    {property_id: 1, title: 'Mr.', last_name: 'Park', first_name: 'Andy', local_name_spelling: 'アンディー', date_of_birth: null, company: 'Code Chrysalis', position: 'Full Stack Engineer'},
    {property_id: 1, title: 'Mr.', last_name: 'Lewis', first_name: 'Dominic', local_name_spelling: 'ドミニック', date_of_birth: null, company: 'Code Chrysalis', position: 'Full Stack Engineer'},
    {property_id: 1, title: 'Ms.', last_name: 'Boucree', first_name: 'Juli', local_name_spelling: 'ジュリ', date_of_birth: null, company: 'Code Chrysalis', position: 'Full Stack Engineer'},
  ]);
};
