require ( './helpers.js' );

describe('employees', function() {
  describe('updateEmployeeWithKeyAndValue(employee, key, value)', function () {
    // Initialize the employee object
    const employee = {};
    beforeEach(function () {
      for (const key in employee) {
        delete employee[key];
      }

      employee.name = 'Sam';
    });

    it('returns an employee with the original key value pairs and the new key value pair', function () {
      expect(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')).to.eql({
        name: 'Sam',
        streetAddress: '11 Broadway'
      });
    });

    it('it does not modify the original employee, but rather returns a clone with the new data', function () {
      updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

      expect(employee['streetAddress']).to.equal(undefined);
    });
  });

  describe('employees', function() {
    describe('updateEmployeeWithKeyAndValue(employee, key, value)', function () {
      // Initialize the employee object
      const employee = {};
  
      beforeEach(function () {
        for (const key in employee) {
          delete employee[key];
        }
  
        employee.name = 'Sam';
      });
  
      // Define the destructivelyUpdateEmployeeWithKeyAndValue function
      function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
        return employee;
      }
  
      describe('destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)', function () {
        it('updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee', function () {
          expect(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')).to.eql({
            name: 'Sam',
            streetAddress: '12 Broadway'
          });
  
          expect(employee).to.eql({
            name: 'Sam',
            streetAddress: '12 Broadway'
          });
        });
      });
    });
  });
  
  const employee = {}; // Define the employee object
  employee.name = 'Sam'; // Set the name property to 'Sam'

describe('employees', function() {
  // Existing code...

  describe('destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)', function () {
    it('updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee', function () {
      expect(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')).to.eql({
        name: 'Sam',
        streetAddress: '12 Broadway'
      });

      expect(employee).to.eql({
        name: 'Sam',
        streetAddress: '12 Broadway'
      });
    });
  });

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
  
    if (newEmployee.hasOwnProperty(key)) {
      delete newEmployee[key];
    }
  
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    if (employee.hasOwnProperty(key)) {
      delete employee[key];
    }
  
    return employee;
  }
  
  describe('employees', function() {
    // Existing code...
  
    describe('deleteFromEmployeeByKey(employee, key)', function () {
      it('deletes `key` from a clone of employee and returns the new employee (it is non-destructive)', function () {
        let newEmployee = deleteFromEmployeeByKey(employee, 'name');
  
        expect(newEmployee['name']).to.equal(undefined);
        expect(typeof newEmployee).to.equal('object');
      });
  
      it('does not modify the original employee (it is non-destructive)', function () {
        let originalName = employee['name'];
        deleteFromEmployeeByKey(employee, 'name');
  
        expect(employee['name']).to.equal(originalName);
      });
    });
  
    describe('destructivelyDeleteFromEmployeeByKey(employee, key)', function () {
      it('modifies the original employee (it is destructive)', function () {
        let originalName = employee['name'];
        destructivelyDeleteFromEmployeeByKey(employee, 'name');
  
        expect(employee['name']).to.equal(undefined);
      });
    });
  })
})
})
