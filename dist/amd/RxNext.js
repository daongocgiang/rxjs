define(['exports', 'module', './Observable', './Observer', './scheduler/nextTick', './scheduler/immediate', './Subscription', './CompositeSubscription', './SerialSubscription', './Subject', './observable/value', './observable/return', './observable/fromEventPattern', './observable/fromEvent', './observable/throw', './observable/empty', './observable/range', './observable/fromArray', './observable/zip', './observable/fromPromise', './operator/map', './operator/mapTo', './operator/mergeAll', './operator/flatMap', './operator/concatAll', './operator/skip', './operator/take', './operator/subscribeOn', './operator/observeOn', './operator/zipAll', './operator/zip', './operator/merge'], function (exports, module, _Observable, _Observer, _schedulerNextTick, _schedulerImmediate, _Subscription, _CompositeSubscription, _SerialSubscription, _Subject, _observableValue, _observableReturn, _observableFromEventPattern, _observableFromEvent, _observableThrow, _observableEmpty, _observableRange, _observableFromArray, _observableZip, _observableFromPromise, _operatorMap, _operatorMapTo, _operatorMergeAll, _operatorFlatMap, _operatorConcatAll, _operatorSkip, _operatorTake, _operatorSubscribeOn, _operatorObserveOn, _operatorZipAll, _operatorZip, _operatorMerge) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _Observable2 = _interopRequireDefault(_Observable);

    var _Observer2 = _interopRequireDefault(_Observer);

    var _nextTick = _interopRequireDefault(_schedulerNextTick);

    var _immediate = _interopRequireDefault(_schedulerImmediate);

    var _Subscription2 = _interopRequireDefault(_Subscription);

    var _CompositeSubscription2 = _interopRequireDefault(_CompositeSubscription);

    var _SerialSubscription2 = _interopRequireDefault(_SerialSubscription);

    var _Subject2 = _interopRequireDefault(_Subject);

    var _value = _interopRequireDefault(_observableValue);

    var _return2 = _interopRequireDefault(_observableReturn);

    var _fromEventPattern = _interopRequireDefault(_observableFromEventPattern);

    var _fromEvent = _interopRequireDefault(_observableFromEvent);

    var _throw2 = _interopRequireDefault(_observableThrow);

    var _empty = _interopRequireDefault(_observableEmpty);

    var _range = _interopRequireDefault(_observableRange);

    var _fromArray = _interopRequireDefault(_observableFromArray);

    var _zip = _interopRequireDefault(_observableZip);

    var _fromPromise = _interopRequireDefault(_observableFromPromise);

    var _map = _interopRequireDefault(_operatorMap);

    var _mapTo = _interopRequireDefault(_operatorMapTo);

    var _mergeAll = _interopRequireDefault(_operatorMergeAll);

    var _flatMap = _interopRequireDefault(_operatorFlatMap);

    var _concatAll = _interopRequireDefault(_operatorConcatAll);

    var _skip = _interopRequireDefault(_operatorSkip);

    var _take = _interopRequireDefault(_operatorTake);

    var _subscribeOn = _interopRequireDefault(_operatorSubscribeOn);

    var _observeOn = _interopRequireDefault(_operatorObserveOn);

    var _zipAll = _interopRequireDefault(_operatorZipAll);

    var _zipProto = _interopRequireDefault(_operatorZip);

    var _mergeProto = _interopRequireDefault(_operatorMerge);

    _Observable2['default'].value = _value['default'];
    _Observable2['default']['return'] = _return2['default'];
    _Observable2['default'].fromEventPattern = _fromEventPattern['default'];
    _Observable2['default'].fromEvent = _fromEvent['default'];
    _Observable2['default']['throw'] = _throw2['default'];
    _Observable2['default'].empty = _empty['default'];
    _Observable2['default'].range = _range['default'];
    _Observable2['default'].fromArray = _fromArray['default'];
    _Observable2['default'].zip = _zip['default'];
    _Observable2['default'].fromPromise = _fromPromise['default'];
    _Observable2['default'].prototype.map = _map['default'];
    _Observable2['default'].prototype.mapTo = _mapTo['default'];
    _Observable2['default'].prototype.mergeAll = _mergeAll['default'];
    _Observable2['default'].prototype.flatMap = _flatMap['default'];
    _Observable2['default'].prototype.concatAll = _concatAll['default'];
    _Observable2['default'].prototype.skip = _skip['default'];
    _Observable2['default'].prototype.take = _take['default'];
    _Observable2['default'].prototype.subscribeOn = _subscribeOn['default'];
    _Observable2['default'].prototype.observeOn = _observeOn['default'];
    _Observable2['default'].prototype.zipAll = _zipAll['default'];
    _Observable2['default'].prototype.zip = _zipProto['default'];
    _Observable2['default'].prototype.merge = _mergeProto['default'];
    var RxNext = {
        Scheduler: {
            nextTick: _nextTick['default'],
            immediate: _immediate['default']
        },
        Observer: _Observer2['default'],
        Observable: _Observable2['default'],
        Subscription: _Subscription2['default'],
        CompositeSubscription: _CompositeSubscription2['default'],
        SerialSubscription: _SerialSubscription2['default'],
        Subject: _Subject2['default']
    };
    module.exports = RxNext;
});