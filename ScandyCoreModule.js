
const {
  DeviceEventEmitter,
  NativeEventEmitter,
  NativeModules
} = require('react-native');

const ScandyCoreManager = NativeModules.ScandyCore;

// test the benefits of native event emitting in js module
export const ScandyCoreEvt = new NativeEventEmitter(ScandyCoreManager);

export function onDisconnectedUSBScanner() {
  const promise = new Promise((resolve, reject) => {
    listener = ScandyCoreEvt.addListener('onDisconnectedUSBScanner', function(success) {
      listener.remove();
      if (success) {
        resolve();
      } else {
        reject();
      }
    })
  });
  return promise;
}

export function initializeScanner(file_path = null) {
  const promise = new Promise((resolve, reject) => {
    listener = ScandyCoreEvt.addListener('onScannerReady', function(success) {
      listener.remove();
      if (success) {
        resolve();
      } else {
        reject();
      }
    });

    ScandyCoreManager.initializeScanner(file_path);
  });
  return promise;
}

export function startPreview() {
  const promise = new Promise( function(resolve, reject) {
    listener = ScandyCoreEvt.addListener('onFinishedStartingPreview', function(success) {
      listener.remove();
      if (success) {
        resolve();
      } else {
        reject();
      }
    });
    ScandyCoreManager.startPreview();
  });
  return promise;
}

export function startScanning() {
  const promise = new Promise( function(resolve, reject) {
    listener = ScandyCoreEvt.addListener('onFinishedStartingScanning', function(success) {
      listener.remove();
      if (success) {
        resolve();
      } else {
        reject();
      }
    });
    ScandyCoreManager.startScanning();
  });
  return promise;
}

export function stopScanning() {
  const promise = new Promise( function(resolve, reject) {
    listener = ScandyCoreEvt.addListener('onFinishedStoppingScanning', function(success) {
      listener.remove();
      if (success) {
        resolve();
      } else {
        reject();
      }
    });
    ScandyCoreManager.stopScanning();
  });
  return promise;
}

export function uninitializeScanner() {
  const promise = new Promise( function(resolve, reject) {
    listener = ScandyCoreEvt.addListener('onScannerReady', function(success) {
      listener.remove();
      if (success) {
        reject();
      } else {
        resolve();
      }
    });
    ScandyCoreManager.uninitializeScanner();
  });
  return promise;
}


export function getAvailableScanResolutions() {
  const promise = new Promise( function(resolve, reject) {
    listener = ScandyCoreEvt.addListener('onResolutionsAvailable', function(resolutions) {
      listener.remove();
      if (resolutions) {
        resolve(resolutions);
      } else {
        reject(null);
      }
    });
    ScandyCoreManager.getAvailableScanResolutions();
  });
  return promise;
}


export function setScanResolution(resolution) {
  const promise = new Promise( function(resolve, reject) {
    listener = ScandyCoreEvt.addListener('onFinishedSettingScanResolution', function(success) {
      listener.remove();
      if (success) {
        resolve();
      } else {
        reject();
      }
    });
    ScandyCoreManager.setScanResolution(resolution);
  });
  return promise;
}


export function getScanSize() {
  const promise = new Promise( function(resolve, reject) {
    listener = ScandyCoreEvt.addListener('onFinishedGettingScanSize', function(size) {
      listener.remove();
      if (size) {
        resolve(size);
      } else {
        reject();
      }
    });
    ScandyCoreManager.getScanSize();
  });
  return promise;
}

export function setScanSize(size) {
  const promise = new Promise( function(resolve, reject) {
    listener = ScandyCoreEvt.addListener('onFinishedSettingScanSize', function(success) {
      listener.remove();
      if (success) {
        resolve();
      } else {
        reject();
      }
    });
    ScandyCoreManager.setScanSize(size);
  });
  return promise;
}

export function loadMeshFromURL(url) {
  const promise = new Promise((resolve, reject) => {
    listener = ScandyCoreEvt.addListener('onFinishedLoadingMesh', function(success) {
      listener.remove();
      if (success) {
        resolve();
      } else {
        reject();
      }
    });
    ScandyCoreManager.loadMeshFromURL(url);
  });
  return promise;
}

export function generateMesh() {
  const promise = new Promise( function(resolve, reject) {
    listener = ScandyCoreEvt.addListener('onFinishedGeneratingMesh', function(success) {
      listener.remove();
      if (success) {
        resolve();
      } else {
        reject();
      }
    });
    ScandyCoreManager.generateMesh();
  });
  return promise;
}

export function saveMesh(file_path) {
  const promise = new Promise( function(resolve, reject) {
    listener = ScandyCoreEvt.addListener('onFinishedSavingMesh', function(success) {
      listener.remove();
      if (success) {
        resolve();
      } else {
        reject();
      }
    });
    ScandyCoreManager.saveMesh(file_path);
  });
  return promise;
}
