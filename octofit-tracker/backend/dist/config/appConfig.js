"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiBaseUrl = exports.codespaceName = exports.API_PORT = void 0;
exports.API_PORT = 8000;
exports.codespaceName = process.env.CODESPACE_NAME;
exports.apiBaseUrl = exports.codespaceName
    ? `https://${exports.codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
