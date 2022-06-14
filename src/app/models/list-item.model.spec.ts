import { ListItem } from './list-item.model';

describe('ListItemModel', () => {
  it('should create an instance', () => {
    expect(new ListItem(1)).toBeTruthy();
  });

  it('should verify if 6 can be divide by 3', () => {
    const listItemModel = new ListItem(6);

    expect(listItemModel.number).toEqual(6);
    expect(listItemModel.byFive).toBeFalse();
    expect(listItemModel.byThree).toBeTrue();
  });

  it('should verify if 4 can be divide by 3', () => {
    const listItemModel = new ListItem(4);

    expect(listItemModel.number).toEqual(4);
    expect(listItemModel.byFive).toBeFalse();
    expect(listItemModel.byThree).toBeFalse();
  });

  it('should verify if 10 can be divide by 5', () => {
    const listItemModel = new ListItem(10);

    expect(listItemModel.number).toEqual(10);
    expect(listItemModel.byFive).toBeTrue();
    expect(listItemModel.byThree).toBeFalse();
  });

  it('should verify if 13 can be divide by 5', () => {
    const listItemModel = new ListItem(13);

    expect(listItemModel.number).toEqual(13);
    expect(listItemModel.byFive).toBeFalse();
    expect(listItemModel.byThree).toBeFalse();
  });

  it('should verify if 15 can be divide by 5 and 3', () => {
    const listItemModel = new ListItem(15);

    expect(listItemModel.number).toEqual(15);
    expect(listItemModel.byFive).toBeTrue();
    expect(listItemModel.byThree).toBeTrue();
  });
});
