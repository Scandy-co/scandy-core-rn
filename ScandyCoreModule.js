
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

/**
 * Quits the current ScandyCore session. This stops scanners, tears down visualizers, and just generally shuts everything down. Good idea to call this explicitly when stopping your app.
 * @return Promise Returns a promise that resolves on successful quitting and rejects if the quit fails for some reason.
 */
export function quit() {
  const promise = new Promise((resolve, reject) => {
    listener = ScandyCoreEvt.addListener('onFinishedQuit', function(success) {
      listener.remove();
      if (success) {
        resolve();
      } else {
        reject();
      }
    });
    ScandyCoreManager.quit();
  });
  return promise;
}

export async function pause() {
  return await ScandyCoreManager.pause();
}

export async function resume() {
  return await ScandyCoreManager.resume();
}

export async function setLicense(license) {
  return await ScandyCoreManager.setLicense(license);
}

export async function hasUSBScanner() {
  return await ScandyCoreManager.hasUSBScanner();
}

export function initializeScanner(file_path = null) {
  const promise = new Promise((resolve, reject) => {
    listener = ScandyCoreEvt.addListener('onScannerReady', function(res) {
      listener.remove();
      if (res.success) {
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


export function setResolution(resolution) {
  const promise = new Promise( function(resolve, reject) {
    listener = ScandyCoreEvt.addListener('onFinishedSettingScanResolution', function(success) {
      listener.remove();
      if (success) {
        resolve();
      } else {
        reject();
      }
    });
    ScandyCoreManager.setResolution(resolution);
  });
  return promise;
}


export async function getResolution() {
  return await ScandyCoreManager.getResolution();
}

export async function getScanSize() {
  return await ScandyCoreManager.getScanSize();
}

export async function setScanSize(size) {
  return await ScandyCoreManager.setScanSize(size);
}

/**
 * Loads a mesh from the provided URL. That URL can be to a file on the internet or a file URL for a file on the device. This URL can be a .stl, .obj, .ply, or .zip file.
 * @param  String url URL of the mesh to load.
 * @return Promise Returns a promise that resolves on successful loading and rejects if the loading fails for some reason.
 */
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

export async function getUseCases() {
  return await ScandyCoreManager.getUseCases();
}

export async function setUseCase(use_case) {
  return await ScandyCoreManager.setUseCase(use_case);
}

export async function getScanState(){
  return await ScandyCoreManager.getScanState();
}

export function onTrackingDidUpdate(callback){
  listener = ScandyCoreEvt.addListener('onTrackingDidUpdate', function(res) {
    callback(res);
  });
}
