import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Paper from '@material-ui/core/Paper';
import Image from 'next/image';

export interface IUploadFileMainProps {
  handleFile: (files: any) => void;
  handleLoading: () => void;
}

export default function UploadFileMain({
  handleFile,
  handleLoading,
}: IUploadFileMainProps) {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const type = file.type.split('/')[0];
    if (type === 'video' || type === 'audio') {
      handleFile(file);
      handleLoading();
    } else {
      // ERROR
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <Paper elevation={3}>
      <div className="load_file_main" {...getRootProps()}>
        <h1>Drag File</h1>
        <Image
          src="/upload_cloud.svg"
          alt="cloud upload"
          width={240}
          height={240}
          className="load_file_image"
          priority
        />
        <input {...getInputProps()} />
      </div>
    </Paper>
  );
}
