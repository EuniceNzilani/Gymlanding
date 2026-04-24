"use client"

import { motion } from "framer-motion"

export default function Features() {
  return (
    <motion.section
      id="features"
      style={{padding: '3.5rem 1rem', width: '100%', boxSizing: 'border-box', background: '#ffffff62'}}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div style={{maxWidth: 1400, margin: '0 auto', borderRadius: 15,  background: '#ffd9b3', padding: '2rem'}}>
        {/* Header */}
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 28}}>
          <div>
            <h2 style={{margin: 0, fontSize: '1.8rem', fontWeight: 900, color: '#0f172a'}}>Powerful Features 💪</h2>
            <p style={{marginTop: 8, color: '#64748b', maxWidth: 600, lineHeight: 1.5}}>Everything you need to run a thriving gym business</p>
          </div>
        </div>
        <motion.div
          style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          {/* Card 1 */}
          <motion.div
            style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', padding: 20, borderRadius: 12, boxShadow: '0 15px 35px rgba(2,6,23,0.12)', border: '1px solid rgba(255,255,255,0.16)', color: '#0f172a'}}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div style={{fontSize: 32, marginBottom: 12}}>📈</div>
            <h3 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800}}>Dashboard</h3>
            <p style={{marginTop: 8, fontSize: '0.9rem', lineHeight: 1.5}}>Track revenue and growth with charts. Monitor your gym performance in real-time from anywhere.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', color: '#0f172a', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 15px 35px rgba(2,6,23,0.12)'}}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div style={{fontSize: 32, marginBottom: 12}}>💰</div>
            <h3 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800}}>Payment Tracking</h3>
            <p style={{marginTop: 8, fontSize: '0.9rem', lineHeight: 1.5}}>Never chase payments again. M-Pesa, cash, card, and bank transfers all in one place.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', color: '#0f172a', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 15px 35px rgba(2,6,23,0.12)'}}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div style={{fontSize: 32, marginBottom: 12}}>👔</div>
            <h3 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800}}>Staff Control</h3>
            <p style={{marginTop: 8, fontSize: '0.9rem', lineHeight: 1.5}}>Add staff, set permissions, and track performance. Manage your team efficiently with role-based access.</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', color: '#0f172a', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 15px 35px rgba(2,6,23,0.12)'}}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div style={{fontSize: 32, marginBottom: 12}}>📋</div>
            <h3 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800}}>Plans & Pricing</h3>
            <p style={{marginTop: 8, fontSize: '0.9rem', lineHeight: 1.5}}>Create custom membership plans. Flexible pricing that works for your gym and your members.</p>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', color: '#0f172a', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 15px 35px rgba(2,6,23,0.12)'}}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div style={{fontSize: 32, marginBottom: 12}}>🏃</div>
            <h3 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800}}>Workouts & Diet</h3>
            <p style={{marginTop: 8, fontSize: '0.9rem', lineHeight: 1.5}}>Create programs and meal plans for your members. Help them achieve their fitness goals faster.</p>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', color: '#0f172a', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 15px 35px rgba(2,6,23,0.12)'}}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div style={{fontSize: 32, marginBottom: 12}}>📝</div>
            <h3 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800}}>Activity Log</h3>
            <p style={{marginTop: 8, fontSize: '0.9rem', lineHeight: 1.5}}>Track all gym activities automatically. Keep records of member attendance and engagement.</p>
          </motion.div>

          {/* Card 7 */}
          <motion.div
            style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.25)), rgba(255,138,0,0.02)', color: '#0f172a', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 15px 35px rgba(2,6,23,0.12)'}}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div style={{fontSize: 32, marginBottom: 12}}>📣</div>
            <h3 style={{margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 800}}>Announcements</h3>
            <p style={{marginTop: 8, fontSize: '0.9rem', lineHeight: 1.5}}>Schedule and send messages to your members. Keep them engaged and informed about events.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
