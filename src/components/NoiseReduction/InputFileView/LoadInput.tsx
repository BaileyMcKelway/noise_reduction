import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
export interface ILoadInputProps {
  handleFile: (files) => void;
}

// This is where the drag in drop functionality will be.
export function LoadInput({ handleFile }: ILoadInputProps) {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const type = file.type.split('/')[0];
    if (type === 'video' || type === 'audio') {
      handleFile(file);
    } else {
      // ERROR
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="load_file_main" {...getRootProps()}>
      <h3>No File</h3>
      <input {...getInputProps()} />
    </div>
  );
}
