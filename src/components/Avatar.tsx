const Avatar = ({ initials }: { initials: string }) => {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
      <span className="font-medium text-gray-600">
        {initials}
      </span>
    </div>
  )
}

export default Avatar
