// permissoes.js
const { buscarUsuario } = require('./usuarios');

const permissoesPorEmail = {
  'maria@empresa.com': ['ver_saldo', 'transferir', 'exportar_extrato'],
  'joao@empresa.com': ['ver_saldo'],
};

function listarPermissoes(email) {
  const usuario = buscarUsuario(email);
  if (!usuario) return [];
  return permissoesPorEmail[email] || [];
}

module.exports = { listarPermissoes };
