import { createClient } from '@/utils/supabase/server';

export default async function Instruments() {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("instruments").select();

  return (
    <>
      <html>
        <body>
          <main>
            <>{JSON.stringify(instruments, null, 2)}</>
          </main>
        </body>        
      </html>
        
    </>
  )
}