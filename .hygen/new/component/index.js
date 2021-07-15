module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'コンポーネントの区分',
        choices: ['Atoms', 'Molecules', 'Organisms', 'Templates']
      },
      {
        type: 'input',
        name: 'directory',
        message: 'ディレクトリ(省略可)'
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'コンポーネント名'
      }
    ];
    return inquirer
      .prompt(questions)
      .then((answers) => {
        const { category, directory, component_name } = answers;
        const path = `${category}${directory ? `/${directory}` : ''}`;
        return { path, component_name };
      });
  }
}
