// tests/modelos/IntentoPregunta.test.js

const IntentoPregunta = require('../modelos/IntentoPregunta');

describe('Modelo: IntentoPregunta', () => {
  test('debería estar definido', () => {
    expect(IntentoPregunta).toBeDefined();
  });

  test('tiene el campo id como entero, autoincremental y clave primaria', () => {
    const atributos = IntentoPregunta.getAttributes();

    expect(atributos.id).toBeDefined();
    expect(atributos.id.type.constructor.name).toBe('INTEGER');
    expect(atributos.id.primaryKey).toBe(true);
    expect(atributos.id.autoIncrement).toBe(true);
  });

  test('no incluye timestamps automáticamente', () => {
    expect(IntentoPregunta.options.timestamps).toBe(false);
  });

  test('usa la tabla correcta en la base de datos', () => {
    expect(IntentoPregunta.getTableName()).toBe('intentos_pregunta');
  });
});
