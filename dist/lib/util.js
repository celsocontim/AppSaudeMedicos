"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPaginationInfo = void 0;
var getPaginationInfo = function getPaginationInfo(page, limit, count) {
  return {
    page: +page,
    limit: +limit,
    totalCount: count,
    totalPages: Math.ceil(count / limit)
  };
};
exports.getPaginationInfo = getPaginationInfo;