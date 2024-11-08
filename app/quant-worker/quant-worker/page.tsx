'use client'

import { useEffect, useState } from "react"
import DeployWorker from "@/components/quant-worker/quant-worker/DeployWorker"
import ShowWorker from "@/components/quant-worker/quant-worker/ShowWorker"
import WorkerModal from "@/components/quant-worker/quant-worker/WorkerModal"
import WorkerDashboard from "@/components/quant-worker/quant-worker/WorkerDashboard"

const QuantWorker = () => {

  //On DeployWorker
  const [deployWorker, setDeployWorker] = useState<boolean>(false)
  useEffect(() => {
    setDeployWorker(true)
  }, [])

  //On ShowWorker
  const [showWorker, setShowWorker] = useState<boolean>(false)
  const [marketType, setMarketType] = useState<string>('')

  //On WorkerModal
  const [workerModal, setWorkerModal] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>('');
  const [apiKey, setApiKey] = useState<string>('');
  
  useEffect(() => {
    if (!workerModal) {
      document.body.style.overflow = 'unset'
    }
  }, [workerModal])

  //On WorkerDashboard
  const [workerDashboard, setWorkerDashboard] = useState<boolean>(false);

  return (
    <>
      {deployWorker && <DeployWorker setShowWorker={setShowWorker} setDeployWorker={setDeployWorker} />}
      {showWorker && <ShowWorker setWorkerModal={setWorkerModal} setMarketType={setMarketType} />}
      {workerModal && <WorkerModal setWorkerModal={setWorkerModal} setWorkerDashboard={setWorkerDashboard} setShowWorker={setShowWorker} projectName={projectName} setProjectName={setProjectName} apiKey={apiKey} setApiKey={setApiKey} />}
      {workerDashboard && <WorkerDashboard marketType={marketType} />}
    </>

  )
}

export default QuantWorker