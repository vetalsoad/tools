import { getTasksList } from '../tasksGateway';

it('should return promise pending', () => {
  getTasksList().then((tasks) => {
    expect(Array.isArray(tasks).toEqual(true));
  });
});
