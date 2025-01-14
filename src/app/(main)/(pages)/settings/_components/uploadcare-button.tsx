'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';

type Props = {
  onUpload: (e: string) => any
}

const pubKey = process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY;

const UploadCareButton = ({ onUpload }: Props) => {

  const router = useRouter();
  const [files, setFiles] = useState<any[]>([]);


  const handleChangeEvent = async(e:any) => {
    setFiles([
      ...e.allEntries.filter((file:any) => file.status === "success"),
    ]);
  };

  useEffect(() => {
    const handleUpload = async () => {
        if(files[0]?.uuid) {
            const file = await onUpload(`https://ucarecdn.com/${files[0]?.uuid}/`)
            if (file) router.refresh()
        }
    };
    handleUpload();
  }, [files, setFiles]);
  
  return (
    <div>
      <FileUploaderRegular
         sourceList="local, url, camera, dropbox"
         classNameUploader="uc-dark"
         onChange={handleChangeEvent}
         pubkey={pubKey!}
      />
    </div>
  )
}

export default UploadCareButton