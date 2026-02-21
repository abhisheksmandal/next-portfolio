// Use icons from `simple-icons` for accurate branding where available.
import {
  siDocker,
  siJenkins,
  siKubernetes,
  siTerraform,
  siGit,
  siAnsible,
  siPrometheus,
  siGrafana,
  siPython,
  siGooglecloud,
} from 'simple-icons'

import React from 'react'

function SimpleIcon(icon: any) {
  if (!icon) return (props: React.SVGProps<SVGSVGElement>) => null
  return (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{icon.title}</title>
      <path d={icon.path} fill={`#${icon.hex}`} />
    </svg>
  )
}

// simple-icons package doesn't expose an AWS/Amazon icon in this release,
// fallback to a built-in AWS-like SVG for branding-like appearance.
export const AWSIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    role="img"
    {...props}
  >
    <title>AWS</title>
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontFamily="Inter, Arial, Helvetica, sans-serif"
      fontWeight="700"
      fontSize="8.5"
      fill="#FF9900"
    >
      AWS
    </text>
  </svg>
)
export const DockerIcon = SimpleIcon(siDocker)
export const JenkinsIcon = SimpleIcon(siJenkins)
export const KubernetesIcon = SimpleIcon(siKubernetes)
export const TerraformIcon = SimpleIcon(siTerraform)
export const GitIcon = SimpleIcon(siGit)
export const AnsibleIcon = SimpleIcon(siAnsible)
export const PrometheusIcon = SimpleIcon(siPrometheus)
export const GrafanaIcon = SimpleIcon(siGrafana)
export const PythonIcon = SimpleIcon(siPython)
export const GCPIcon = SimpleIcon(siGooglecloud)
