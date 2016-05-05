var revealingModule = (function revealingModule() {
  var privateName = 'Modesto Figuereo',
      publicName = 'Francis Brito';

  function privateFunction() {
    console.log('Name: ' + privateName);
  }

  function publicSetName(name) {
    privateName = name;
  }

  function publicGetName() {
    privateFunction();
    return privateName;
  }

  return {
    publicName: publicName,
    setName: publicSetName,
    getName: publicGetName
  }
})();
