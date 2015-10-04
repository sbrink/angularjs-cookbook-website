describe('Task Factory', function () {
  beforeEach(angular.mock.module('mockHttpApp'));

  beforeEach(inject(function (_$httpBackend_, _Task_) {
    $httpBackend = _$httpBackend_;
    Task = _Task_;
  }));

  it('should just return the task array without response object', function () {
    var result,
      sample = ['Tidy up', 'Clean the dishes'];

    $httpBackend.when('GET', '/tasks', {}).respond(sample);

    Task.all().then(function(response){
      result = response;
    });

    $httpBackend.flush();

    expect(result).toEqual(sample);
  });

});