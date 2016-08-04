/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports = (appConfig, resolve, rootDir) => {
  const ownConfig = {
    automock: false,
    moduleNameMapper: {
      '^[./a-zA-Z0-9$_-]+\\.(jpg|png|gif|eot|svg|ttf|woff|woff2|mp4|webm)$': resolve('config/jest/FileStub.js'),
      '^[./a-zA-Z0-9$_-]+\\.css$': resolve('config/jest/CSSStub.js')
    },
    persistModuleRegistryBetweenSpecs: true,
    scriptPreprocessor: resolve('config/jest/transform.js'),
    setupFiles: [
      resolve('config/polyfills.js')
    ],
    testEnvironment: 'node'
  };

  if (appConfig) {
    // Merge user config into the default config.
    if (appConfig.setupFiles) {
      appConfig.setupFiles = ownConfig.setupFiles.concat(appConfig.setupFiles);
    }
    if (appConfig.moduleNameMapper) {
      appConfig.moduleNameMapper = Object.assign(
        {},
        ownConfig.moduleNameMapper,
        appConfig.moduleNameMapper
      );
    }
  }

  const config = Object.assign(ownConfig, appConfig);
  if (rootDir) {
    config.rootDir = rootDir;
  }
  return config;
};
